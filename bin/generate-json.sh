#!/bin/bash

line=''
file="dist/themes.json"
count=$(($(ls dist/*.css | wc -l)))
i=0
endOfLine=','

echo "Generating themes.json ..."

echo '[' >$file

for css in dist/*.css; do
	i=$((i + 1))

	theme=$(basename -- $css .css)

	value=${theme/prism-/}
	text=${value/.light-dark/ (Light\/Dark Combo)}
	text=${text//-/ }
	text=($text)
	text="${text[@]^}"

	if [[ $i == $count ]]; then
		endOfLine=''
	fi

	echo "  { \"text\": \"$text\", \"value\": \"$value\" }$endOfLine" >>$file
done

echo ']' >>$file
