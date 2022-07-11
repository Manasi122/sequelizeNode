$qry = "select * from user where user_id='1' ";
$qry = "select * from employee where emp_id='1' ";
$qry = "select * from employee where emp_id='1' ";


commonFetch('users','user_id','2');

commonFetch($tblname,$colname,$val)
{
    $qry = "select * from '".$tblname."' where '".$colname."' = '".$val."' ";
    
}

commonFetch($tblname,$rslt,$colname,$val)
{
    $qry = "select '".$rslt."' from '".$tblname."' where '".$colname."' = '".$val."' ";

}



commonInsert($tblname,$colarr,$valarr);

commonInsert($colarr,$valarr)
{

    foreach($colarr as $col)
    {
        $cols = 'id,name,email'
    }

    $qry = "Insert into '".$tblname."' ('".$cols."') values () ";

}

user

id
full name
first name
mobile -
email - 'jumareumesh@gmail.com';
username - 'umesh.jumare';
type - 'client';

------------------ chk user ---------------------

var email = '';

users

{
    code:'200';
    msg:'existClinet';
    usr_type:'';
}

------------------------  login  ---------------



var email = '';
var password = '';

users

{
    code:'200';
    msg:'User Details Fetched Successfully';
    data:
    {

    };
}


--------------------