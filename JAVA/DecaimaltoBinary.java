import java.util.Scanner;
class demo{
    int roll;
    String subject;
}

public class DecaimaltoBinary {
    public static void main(String[] args) {
        demo Rohan = new demo();
        Rohan.roll = 220;
        Rohan.subject = "Maths";
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a Number : ");
        int Decimal_num = sc.nextInt();
        int pw = 1;
        int ans = 0;
        while(Decimal_num > 0){
            int user_Digit = Decimal_num % 2;
            ans+= (user_Digit * pw);
            pw*=10 ;
            Decimal_num/=2 ;
        }
        System.out.println(ans);

    }
}
