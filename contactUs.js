AC_FL_RunContent = 0;

function resetForm(){
	
	document.form1.reset()
}


function incorrectCaptcha( ){
	if( validateForm() ){
		alert("You did not correctly type the word at the end of the form... Please try again.")		
		document.getElementById('capta').setTxtFocus()
	}
}

function submitForm(p){
	if( validateForm() ){
		a= document.form1.action=p				
		document.form1.submit()
	}
}

function validateForm(){
	
	f = document.form1.Full_Name
	if( f.value == ''){
		alert( 'Please enter your Name')
		f.focus( )
		return false
	}
/*	f = document.form1.Last_Name
	if( f.value == ''){
		alert( 'Please enter your Last Name')
		f.focus( )
		return false 
	}*/
	f = document.form1.Email
	if( f.value == ''){
		alert( 'Please enter your Email Address')
		f.focus( )
		return false
	}
	if (!IsEmail(f)){	
		f.focus( )			
		return false
	}

	f = document.form1.Phone
	if( f.value == ''){
		alert( 'Please enter your Phone')
		f.focus( )
		return false
	}		
	
	
	if (!isNumericParenDashPlusSpace(f.value)){	
		alert( 'Please enter numbers, dashes, dots, parenthesis, the letter "X" and spaces only for Phone')
		f.focus( )			
		return false
	}			
	
	if (f.value.length < 10){	
		alert( 'Please enter a 10 digit phone number')
		f.focus( )			
		return false
	}	
	
	return true
}

/* Form Functions */

String.prototype.ltrim = function () { return this.replace(/^\s*/, "");}
String.prototype.rtrim = function () { return this.replace(/\s*$/, "");}
String.prototype.trim  = function () { return this.ltrim().rtrim(); }

function removeCommas(s) {
	var token=new Array();
	var newString="";
	token = s.split(",");
	for (var x=0; x < token.length; x++) {
		newString += token[x];
	}
	return newString;
}

function IsEmail(field){
    var emailStr=field.value
	
    var checkTLD=1;
    var knownDomsPat=/^(com|net|org|edu|int|mil|gov|arpa|biz|aero|name|coop|info|pro|museum)$/;
    var emailPat=/^(.+)@(.+)$/;
    var specialChars="\\(\\)><@,;:\\\\\\\"\\.\\[\\]";
    var validChars="\[^\\s" + specialChars + "\]";
    var quotedUser="(\"[^\"]*\")";
    var ipDomainPat=/^\[(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})\]$/;
    var atom=validChars + '+';
    var word="(" + atom + "|" + quotedUser + ")";
    var userPat=new RegExp("^" + word + "(\\." + word + ")*$");
    var domainPat=new RegExp("^" + atom + "(\\." + atom +")*$");
    var matchArray=emailStr.match(emailPat);
    if (matchArray==null) {
        	//alert(emailStr);
				alert("Email address seems incorrect (check @ and .'s)");
        return false;
    }
    var user=matchArray[1];
    var domain=matchArray[2];
    for (i=0; i<user.length; i++) {
        if (user.charCodeAt(i)>127) {
            alert("Ths username contains invalid characters.");
            return false;
        }
    }
    for (i=0; i<domain.length; i++) {
        if (domain.charCodeAt(i)>127) {
           alert("Ths domain name contains invalid characters.");
            return false;
        }
    }
    if (user.match(userPat)==null) {
       alert("The username doesn't seem to be valid.");
        return false;
    }
    var IPArray=domain.match(ipDomainPat);
    if (IPArray!=null) {
        for (var i=1;i<=4;i++) {
            if (IPArray[i]>255) {
              	alert("Destination IP address is invalid!");
                return false;
            }
        }
    }
    var atomPat=new RegExp("^" + atom + "$");
    var domArr=domain.split(".");
    var len=domArr.length;
    for (i=0;i<len;i++) {
        if (domArr[i].search(atomPat)==-1) {
           alert("The domain name does not seem to be valid.");
            return false;
        }
    }
    if (checkTLD && domArr[domArr.length-1].length!=2 && domArr[domArr.length-1].search(knownDomsPat)==-1) {
        alert("The address must end in a well-known domain or two letter " + "country.");
        return false;
    }
    if (len<2) {
       alert("This address is missing a hostname!");
        return false;
    }
	return true;
}

// Returns true if the string only contains alpha characters (empty string = true)
function isAlpha(txt)
{
	return ValidString(txt,'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz');
}
function isAlphaSpace(txt)
{
	return ValidString(txt,'ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz');
}
function isAlphaSpecialSpace(txt)
{
	return ValidString(txt,"ABCDEFGHIJKLMNOPQRSTUVWXYZ .'abcdefghijklmnopqrstuvwxyz");
}

// Returns true if the string only contains numeric characters (empty string = true)
function isNumeric(txt)
{
	return ValidString(txt,'0123456789');
}
// Returns true if the string only contains numeric characters and dash(empty string = true)
function isNumericDash(txt)
{
	return ValidString(txt,'0123456789-');
}
// Returns true if the string only contains numeric characters and dot(empty string = true)
function isNumericDot(txt)
{
	return ValidString(txt,'0123456789.');
}
// Returns true if the string only contains alpha numeric characters (empty string = true)
function isAlphaNumeric(txt)
{
	return ValidString(txt,'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789');
}
// Returns true if the string only contains alpha numeric characters and dash or slash (empty string = true)
function isAlphaNumericDashSpace(txt)
{
	return ValidString(txt,'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 -');
}
// Returns true if the string only contains numeric characters and dash or () (empty string = true)
function isNumericParenDashPlusSpace(txt)
{
	return ValidString(txt,'Xx0123456789 -().');
}
// Returns true if the CheckString only contains characters passed in ValidString (empty string = true)
function ValidString(ChkString,ValidString)
{
	for (i=0; i<ChkString.length; i++)
	{
	
		if (ValidString.indexOf(ChkString.substring(i,i+1)) == -1){
			return false;
		}
	}
	return true;
}