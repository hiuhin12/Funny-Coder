var a = 1
var b = 2
if (!(a > b)) 
{
    console.log('Dieu kien dung!')
}


var a = true;
var b = false;
var c = a || b;
var d = b && c;

console.log(c, d);

/*
Với toán tử hoặc (||), nếu xuất hiện ít nhất 1 vế bằng true thì kết quả trả về sẽ là true.
Còn với toán tử và (&&), nếu xuất hiện ít nhất 1 vế bằng false thì kết quả trả về sẽ là false.
*/