export class Player
{
    name : string;
    points : string;

    constructor (name : string, points : string)
    {
        this.name = name;
        this.points = points;
    }

    getName() : string{
        return this.name;
    }

    setName(name : string)
    {
        this.name = name;
    }

    getPoints() : string{
        return this.points;
    }

    setPoints(points : string)
    {
        this.points = points;
    }
}