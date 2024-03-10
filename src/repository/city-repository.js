const {City}=require("../models/index");

class CityRepository{
    async createCity({name}){
        try{
            const city=await City.create({name});
            return city;
        }
        catch(err){
            console.log("somthing went wrong in the repository layer")
            throw {err}
        }
    }

    async deleteCity(cityId){
        try{
            await  City.destroy({
            where: {Id:cityId}
            })
            return true
        }
        catch{
            console.log("Somthing went wrong in the repository layer")
            throw{err}
        }
    }

    async updateCity(cityId,data){
        try {
            const city=await City.update(data,{
                where:{
                    id:cityId
                }
            })
            return city;

        } catch (error) {
            console.log("Something went wrong in the reposiroty layer")
            throw {error}
        }

    }
    async getCIty(cityId){
     try {
           const city=await City.findByPk(cityId);
           return city;
     } catch (error) {
        console.log("somehing went wrong in the repository layer")
        throw {error}
      }
    }

}
module.exports=CityRepository;