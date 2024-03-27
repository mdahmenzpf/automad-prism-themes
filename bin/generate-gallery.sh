#!/bin/bash

i=0
line=''
file="themes.md"

echo '' >$file

for png in screenshots/*.png; do
	theme=$(basename -- $png .png)

	name=${theme/prism-/}
	name=${name//-/ }
	name=($name)
	name="${name[@]^}"

	i=$((i + 1))

	line="${line}| ![${name}](${png})<br>[${name}](themes/${theme}.css) "

	if [[ $((i % 3)) == 0 ]]; then
		line="${line} |"
		echo "$line" >>$file
		line=''
	fi

	if [[ $i == 3 ]]; then
		echo '|:---:|:---:|:---:|' >>$file
	fi
done

rest=$((i % 3))

n=0

while [ $n -ne $rest ]; do
	n=$(($n + 1))
	line="${line} |"
done

echo "$line" >>$file

lead='^<!-- gallery-start -->'
tail='^<!-- gallery-end -->'
gsed -i -e "/$lead/,/$tail/{ /$lead/{p; r $file
        }; /$tail/p; d }" README.md
