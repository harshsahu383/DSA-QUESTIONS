import java.util.*;

public class Binarytodecimal {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a Number : ");
        int Binary_num = sc.nextInt();
        int pw = 1;
        int ans = 0;
        while(Binary_num > 0){
            int user_Digit = Binary_num % 10;
            ans+= (user_Digit * pw);
            Binary_num/=10 ;
            pw*=2 ;
        }
        System.out.println(ans);

    }
}
