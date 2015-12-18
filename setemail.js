var frame = window.frames[0].document.documentElement;

  my_form=document.createElement('FORM');
my_form.name='myForm';
my_form.method='POST';
my_form.action='https://ssl.bbc.co.uk/id/signin';

my_tb=document.createElement('INPUT');
my_tb.type='TEXT';
my_tb.name='email';
my_tb.value='jianfangbh@hotmail.co.uk';
my_form.appendChild(my_tb);

my_tb=document.createElement('INPUT');
my_tb.type='TEXT';
my_tb.name='Mybbc2453';
my_tb.value='Values of my Input';
my_form.appendChild(my_tb);

// my_tb=document.createElement('INPUT');
// my_tb.type='HIDDEN';
// my_tb.name='hidden1';
// my_tb.value='Values of my hidden1';
// my_form.appendChild(my_tb);
document.body.appendChild(my_form);
//frame.appendChild(my_form);
my_form.submit();


