import java.util.*;

public class takesInput {
    public static void main(String[] args) {
        System.out.println("Enter a number");
        Scanner sc = new Scanner(System.in);
        int num_1 = sc.nextInt();
        System.out.println("Enter a name");
        String name = sc.nextLine();


        System.out.println("Your number is : " + num_1);
        System.out.println("Your name is : " + name);
    }
}