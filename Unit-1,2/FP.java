class Az {
    int rn = 6;
    String name = "Grv";

    void getValues() {
        System.out.println("Name:" + name + " Rollno:" + rn);
    }
}

class Bz extends Az {
    void getData() {
        System.out.println("Function from Bz");
    }
}

public class FP {
    public static void main(String[] args) {
        FP r = new FP();
        // r.getValues(); 
        Bz b = new Bz();
        b.getData(); 
    }
}
