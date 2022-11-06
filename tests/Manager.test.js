const Manager = require('../lib/Manager')

describe('Manager',()=>{
    describe('getRole',()=>{
        it('Should return role.', ()=>{
            // Arrange
            const role='Manager';
            // Act
            const newRole=new Manager().getRole();
            // Assert
            expect(role).toEqual(newRole);
        })
    });
    describe('getOfficeNumber',()=>{
        it('Should return office number.', ()=>{
            // Arrange
            const officeNumber='8675309';
            // Act
            const newManager=new Manager('1','2','3', officeNumber).getOfficeNumber();
            // Assert
            expect(officeNumber).toEqual(newManager);
        })
    });
})
