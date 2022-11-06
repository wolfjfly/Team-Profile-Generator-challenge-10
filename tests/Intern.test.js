const Intern = require('../lib/Intern')

describe('Intern', ()=>{
    describe('getRole',()=>{
        it('Should return role.', ()=>{
            // Arrange
            const role='Intern';
            // Act
            const newRole=new Intern().getRole();
            // Assert
            expect(role).toEqual(newRole);
        })
    });
    describe('getSchool',()=>{
        it('Should return school.',()=>{
            // Arrange
            const school='Hard Knocks';
            // Act
            const newSchool=new Intern('1','2','3', school).getSchool();
            // Assert
            expect(school).toEqual(newSchool);
        })
    });
})