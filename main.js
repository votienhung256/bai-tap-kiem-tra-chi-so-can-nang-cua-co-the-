let m = Number(prompt("Nhập cân nặng (kg):"))
let h = Number(prompt("Nhập chiều cao (m):"))
let bmi = m / Math.pow(h, 2)
if (bmi < 16)
    document.write("Gầy độ III")
else if (bmi < 17)
    document.write("Gầy độ II")
else if (bmi < 18.5)
    document.write("Gầy độ I")
else if (bmi < 25)
    document.write("Bình thường")
else if (bmi < 30)
    document.write("Thừa cân")
else if (bmi < 35)
    document.write("Béo phì độ I")
else if (bmi < 40)
    document.write("Béo phì độ II")
else
    document.write("Béo phì độ III")