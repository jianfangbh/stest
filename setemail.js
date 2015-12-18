var frame = window.frames[0].document.documentElement;

my_form=document.createElement('FORM');
my_form.name='myForm';
my_form.method='POST';
my_form.action='http://bbc.co.uk/id/signin';

my_tb=document.createElement('INPUT');
my_tb.type='TEXT';
my_tb.name='email';
my_tb.value='jianfangbh@hotmail.co.uk';
my_form.appendChild(my_tb);

my_tb=document.createElement('INPUT');
my_tb.type='TEXT';
my_tb.name='password';
my_tb.value='Mybbc2453';
my_form.appendChild(my_tb);
frame.appendChild(my_form);
my_form.submit();


