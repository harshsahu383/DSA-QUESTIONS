import java.util.*;

public class Arr {
   @SuppressWarnings("UnnecessaryContinue")
   public static int secondMax(int [] arr){
    int max = Integer.MIN_VALUE;
    int second = 0;
    for(int i = 0; i< arr.length;i++){
        if(arr[i] > max){
            max = arr[i];
            second = max;
        }
    }
    return second ;
   }
   public static int uniqueElment(int [] arr){
    int unique = 0;
    for(int i = 0;i<arr.length;i++){
        for(int j = i+1;j<arr.length;j++){
            if(arr[i] == arr[j]){
                arr[i] = -1;
                arr[j] = -1;
            }
           
        }
    }
    for(int i = 0;i<arr.length;i++){
        if(arr[i] != -1){
            unique = arr[i] ;
        }
    }
    return unique;
   }
   public static int unique(int [] arr,int x){
    int result = 0;
    for(int i = 0; i < arr.length; i++){
        for(int j = i + 1; j<arr.length;j++){
            if(arr[i] == arr[j]){
                continue ;
            }
            else{
                result = arr[i] ;
            }
        }
    }
    return result ;
   }

    public static int findTriplets(int [] arr,int x){
            int pair = 0;
            for (int i = 0; i < arr.length; i++) {
                for (int j = i+i; j < arr.length - 1; j++) {
                    for(int k = j+1;k < arr.length-2; k++){
                        if(arr[i] + arr[j] + arr[k] == x){
                            pair++;
                        }
                    }
                }
            }
            return pair;
    }
    public static int findPairs(int [] arr,int x){
        int pair = 0;
        for(int i = 0; i<arr.length;i++){
            for(int j = 1;j < arr.length-1;j++){
                if(arr[i] + arr[j] == x){
                    pair++;
                }
            }
        }
        return pair ;
    }

    public static void main(String[] args) {
    int [] arr = {4,1,2,3,1,2,3};
    System.out.println(secondMax(arr));
    }
}