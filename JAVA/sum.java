import java.text.NumberFormat.Style;
import java.util.*;
public class sum {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a number : ");
        int num_1 = sc.nextInt();
        System.out.println("Enter a Second Number : ");
        int num_2 = sc.nextInt();
        int c = num_1 + num_2;
        System.out.println("Sum of Two Numbers : " + c);
    }
}
