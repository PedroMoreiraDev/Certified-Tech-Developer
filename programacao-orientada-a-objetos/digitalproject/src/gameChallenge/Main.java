package gameChallenge;

import com.company.Client;

public class Main {

    public static void main(String[] args) {

        GameUser firstPlayer = new GameUser("Pedro", "GuaxinimMaroto", 0, 0);
//            testando incrementação de level
        System.out.println ("Nivel inicial: " + firstPlayer.initialLevel());
        System.out.println (firstPlayer.increaseLevel(5));

//            testando incrementação de score
        System.out.println("Score inicial: " + firstPlayer.getScoreBoard());
        System.out.println (firstPlayer.increaseScore(5));

//            testando incrementação de bonus
        System.out.println("Score bonus inicial: " + firstPlayer.getScoreBoard());
        System.out.println(firstPlayer.bonus(2));

    }

}
