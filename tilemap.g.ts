// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "Level2":
            case "Level2":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "Level1":
            case "Level1":return tiles.createTilemap(hex`1800180000000000000000000000000000000000000000000000000000000000000007070707070000000000000000000000000000000a00000007070707070700000000000000000000000002020300000000000707070000000000000a000000000000010101000000000000000000000000030204000000000000000000000000000000000000000002010101000000000000000000000400000000000000000001000000070707070000000000000100000000000000020000000000000707070707000000000000030000000000010000000000070707070700000000000000010000000000000002000000000000000000000000000007070707000000000001000000000b000a00090000000000070707020700000200000000000304020303050000000000000a0707070700010000000000010101010101000000000000030000000000000403020000000000000000000b00000000010000000000000101010000000000000000000402030000000000000000000a000000000b0000070700000101010000000a000000000203030202020300070707070000000000000204020300000101010101010107070707070800000000000101010100000000000000000000000000000204020204000000000000000000000002050000000a000001010101010a000000000003020200000101000000020000000000000004000000000001010100000000000000010000000000000001000000000000000000000000000000000000060606060606060606060606060606060606060606060606`, img`
........................
........................
........................
222.....................
...............222......
..............2.........
....2...................
............2...........
......2.................
..............2.........
........................
........2...2.....222222
........................
......2......222........
........................
.222....................
............2222222.....
......2222..............
........................
22222...........22......
...........222.......2..
.....2..................
........................
........................
`, [myTiles.transparency16,myTiles.tile1,sprites.dungeon.floorLight4,sprites.dungeon.floorLightMoss,sprites.dungeon.floorLight5,sprites.dungeon.floorLight2,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile7,myTiles.tile6], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile2":
            case "tile4":return tile4;
            case "myTile3":
            case "tile5":return tile5;
            case "myTile4":
            case "tile6":return tile6;
            case "myTile5":
            case "tile7":return tile7;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.