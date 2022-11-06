const Engineer = require('../lib/Engineer');

describe('Engineer',()=>{
    describe('getRole',()=>{
        it('Should return role.', ()=>{
            // Arrange
            const role='Engineer';
            // Act
            const newRole=new Engineer().getRole();
            // Assert
            expect(role).toEqual(newRole);
        })
    });
    describe('getGithub',()=>{
        it('Should return username.', ()=>{
            // Arrange
            const github='jimBob';
            // Act
            const newGithub=new Engineer('1', '2', '3', github).getGithub();
            // Assert
            expect(github).toEqual(newGithub);
        })
    });
})