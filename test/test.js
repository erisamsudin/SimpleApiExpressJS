import request from 'supertest';
describe('Our application', function() {
    it('Test Search',function(){
        var url = "http://localhost:3000/search/batman";
        request(url, function(response) {
            expect(response.statusCode).to.equal(200);
            done();
          });
    }
    )
    
    it('Test Search Detail',function(){
        var url = "http://localhost:3000/detail/batman";
        request(url, function(response) {
            expect(response.statusCode).to.equal(200);
            done();
          });
    }
    )

  });