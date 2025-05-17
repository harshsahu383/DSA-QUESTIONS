import java.util.*;
public class W{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a Number");
        int num_1 = sc.nextInt();   
        if(num_1 == 0 || num_1==1) {
         System.out.print("0 and 1 are not the even or odd");}
        else if(num_1%2==0){
            System.out.print(num_1 + " : is even");

        }

        else{
            System.out.print(num_1 + " : is odd");

        }

    }
}
