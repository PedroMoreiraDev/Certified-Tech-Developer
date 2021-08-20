package gameChallenge;

public class GameUser {

    //atributos

    private String name;
    private String nickname;
    private int scoreBoard;
    private int level;

    //construtor
    GameUser(String name, String nickname, int level, int scoreBoard) {
        this.name = name;
        this.nickname = nickname;
        this.level = level;
        this.scoreBoard = scoreBoard;
    }

    //  metodos gets

    public String getName() {
        return name;
    }

    public String getNickname() {
        return nickname;
    }

    public int getScoreBoard() {
        return scoreBoard;
    }

    //  Metodos

    public int initialLevel(){
        return level;
    }

    public String increaseScore(int point) {
        this.scoreBoard = scoreBoard + point;
        return "Parabéns! Você aumentou seu placar! Seu novo placar é: " + scoreBoard;
    }

    public String increaseLevel(int levelUp) {
        this.level = level + levelUp;
       return "Parabéns! Você subiu de level! Seu novo level é:" + level;
    }





    public String bonus(int bonus){
        this.scoreBoard = scoreBoard + bonus;
        return "Parabéns! Você obteve um bonus! Seu novo placar é:" + scoreBoard;
    }



    public String getLevel() {
        return "Parabéns, você subiu de nível! Seu novo nível é: " + level;
    }
}

