package com.company;

public class Main {

    public static void main(String[] args) {

        Client firstClient = new Client(01, "Pedro");
        System.out.println(firstClient.increaseDebt(500));
        System.out.println(firstClient.getName() + " "+  firstClient.getDebt());


    }
}
