textPreprocessing: (text) => {
 
let sanspunct = text.replace(/[.,\/!\;
:{}\-()
]/g, "");
 
let lsanspunct = sanspunct.toLowerCase();
 
let Alsanspunct = lsanspunct.split(" ");
 
let stopwords = [
'i', 'a', 'about', 'am', 'an', 'are', 'as', 'at', 'be', 'by', 'for', 'from', 'how', 'in', 'is', 'it', 'of', 'on', 'or'
, 'that', 'the', 'this', 'to', 'was', 'what', 'when', 'where', 'who', 'will', 'with'
]
 
let fourth = Alsanspunct.filter(i => !stopwords.includes(i)
);
 
let fifth = fourth.filter(i => i)
 
var suffix = [
's', 'ing', 'ed'
]; 
 
 
for (var i = 0; i < fifth.length; i++) {
 
if(fifth[i]
.endsWith(
's'
)
) {
 
fifth[i] = fifth[i]
.replace(/.{0,1}$/, '
'
)
 
}
 
}
 
for (var i = 0; i < fifth.length; i++) {
 
if(fifth[i]
.endsWith(
'ed'
)
) {
 
fifth[i] = fifth[i]
.replace(/.{0,2}$/, '
'
)
 
}
 
}
 
for (var i = 0; i < fifth.length; i++) {
 
if(fifth[i]
.endsWith(
'ing'
)
) {
 
fifth[i] = fifth[i]
.replace(/.{0,3}$/, '
'
)
 
}
 
}
 
return fifth
 
}
