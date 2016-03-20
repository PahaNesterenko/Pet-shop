package org.paha.pet_shop.resource;

import org.paha.pet_shop.domain.Dog;
import org.springframework.stereotype.Component;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import java.util.ArrayList;
import java.util.List;

@Component
@Path("/dogs")
public class DogResource {

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Dog> getAllDogs() {
        List<Dog> dogList = new ArrayList<Dog>();
        Dog rex = new Dog();
        rex.setId(2);
        rex.setName("Rex");
        rex.setBreed("sheppard");
        rex.setColor("black-yellow");
        rex.setWeight(3.5);
        dogList.add(rex);
        return dogList;
    }

    @GET
    @Path("{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Dog getDog(@PathParam(value = "id") String id) {
        Dog rex = new Dog();
        rex.setId(2);
        rex.setName("Rex");
        rex.setBreed("sheppard");
        rex.setColor("black-yellow");
        rex.setWeight(3.5);
        return rex;
    }

}
