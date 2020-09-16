input=$1
text=""
while IFS= read -r line
do
    text="$text\n$line"
done < $input


text=${text#*<testsuite}
text="aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa<testsuite$text" #37 char that we will delete later
text=${text%/testsuite>*}
text="$text/testsuite>"

x=$(echo -e $text)

tmp=""

while IFS= read -r line
do
    tmp="$tmp\n${line:37}"
done <<<$x

echo -e $tmp > $2