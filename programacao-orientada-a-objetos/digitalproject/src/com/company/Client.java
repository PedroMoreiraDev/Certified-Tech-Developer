package com.company;


public class Client{

    private int numberClient;
    private  String name;
    private double debt;

    public double getDebt() {
        return debt;
    }


    public int getNumberClient() {
        return numberClient;
    }

    public String getName() {
        return name;
    }


    Client(int numberClient, String name){
        this.numberClient = numberClient;
        this.name = name;
        this.debt = 0;
    }


    public double increaseDebt(double value){
        this.debt = debt + value;
        return this.debt;
    }

    public String payDebt(){
    this.debt = 0;
    return "Sua divida foi paga! :)";
    }


}