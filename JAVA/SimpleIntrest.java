import java.util.Scanner;
public class SimpleIntrest {
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a Principal ");
        float p  = sc.nextFloat();
        System.out.println("Enter a Rate of Interest ");
        float roi  = sc.nextFloat();
        System.out.println("Enter a Time ");
        float t = sc.nextFloat();
        float result = (p*roi*t)/100;
        System.out.println("Simple Intrest is :  " + result);
    }
}


