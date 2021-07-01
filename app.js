var a =10

document.write("Resut")
document.write( "<br>" + "<br>" + "the value of a is "  +  a)

a=++a
document.write( "<br>" + "<br>" + "the value of a++ is " + a)

a=++a
document.write( "<br>" + "<br>" +  "Know the value of a " + a)

a=--a
document.write( "<br>" + "<br>" + "the value of a++ is " + a)

a=--a
document.write( "<br>" + "<br>" +  "Know the value of a " + a)

/* What will be the output in variables a, b & result after
execution of the following script: */ 

var a = 2, b = 1;
var result = --a - --b + ++b + b--;
document.write( "<br>" + "<br>" +   " the value of a is " + a)
document.write( "<br>" + "<br>" +   " the value of b is " + b)
document.write( "<br>" +  "the result is " + result + "<br>" )

/*   table in table form   */ 

var table
var length
var i 

table=prompt( "Enter any integer Number")
length=prompt( "Enter number for table length ")

document.write('<table border="1" cellspacing="0">');
for(i=0; i<=length; i++ )
{  
    console.log( "<tr><td>" +  table  +  "   x   "  + i + "  =  " + table*i + "</td></tr>" )
}   


/* 6. Take
a) Take three subjects name from user and store them in 3 
different variables. */ 

document.write( "Subject "   +  "<br>" + " English " +  "<br>" + " MAth " + "Total marks" +  "100"  +  "<br>" +  "100"  + "<br>" + "100" )

document.write( "Subject " +  "<br>"   +  " English "  +  "<br>"   +  " MAth "  +  "<br>"   +   "IC"  )
document.write( "<br>" + "Total MArks    "      +  " <br>"   +    "   100  "   + "<br>"   +    "   100   "    + "<br>"   +   "100" + "<br>"   + "300"  )

var subj1
var subj2
var subj3


sub1=prompt("Enter Subject one ")
sub2=prompt("Enter Subject two ")
sub3=prompt("Enter Subject Three")

var marksub1=+prompt("Enter marks subject one")
var marksub2=+prompt("Enter marks subject two")
var marksub3=+prompt("Enter marks subject three")

var totalmarks=300

var obtainedmarks

obtainedmarks=(marksub1+marksub2+marksub3)

document.write(  "<br>" +   "   Obtained MArks     " +  "    <br>    " +     sub1      +       marksub1     +   "<br>" +  sub2   +   marksub2 +  "<br>     "  +        sub3         +       marksub3     +  "    <br>           "      +           " Total   "   +                 obtainedmarks             + "<br>" )

var per1=100/300*marksub1
var per2=100/300*marksub2
var per3=100/300*marksub3

document.write("Percentage   " +    "  <br>  "   +    per1 + "<br>" +   per2 +   "<br>"  +    per3    )




document.write("<br>" + "Obtained marks is " + "<br>" + obtainedmarks)

var per=100/totalmarks*obtainedmarks
document.write(  "your percentage is " +  "<br>" +per )
