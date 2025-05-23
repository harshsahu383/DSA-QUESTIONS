import java.util.*;
public class Array{
//    public static int Sum(int [] nums){
//         int sum = 0 ;
//         for( int num : nums){
//             sum+=num;
//         }
//         return sum ;
//     }
// public static int max(int [] nums){
//     int max = nums[0];
//     for(int num : nums){
//         if(max < num){
//             max = num;
//         }
//     }
//     return max;
// }
public static int find(int [] nums,int target){
    int index = 0 ;
    for(int num : nums){
        if(num == target){
            return index;
        }
        index++;
    }
    return -1;
}
public static void main(String[] args){
    int [] ages = {1,2,3,5};
    // String [] names = new String[4];
    // int [] [] age = new int[4][2];
    // int [] [] ag = {{1},{2},{3}};

    // names[0] = "Harsh";
    // names[1] = "Harsh";
    // names[2] = "Harsh";
    // names[3] = "Harsh";
    // age[0][1] = 5;
    // System.out.println(ages[0]);
    // System.out.println(age[0][1]);
    // System.out.println(names[0]);
    // System.out.println(ag[1][0]);
    // System.out.print(ag.length);
    // Array obj = new Array();
    System.out.print(find(ages,3));

}
}