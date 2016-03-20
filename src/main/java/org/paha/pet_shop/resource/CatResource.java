package org.paha.pet_shop.resource;

import org.paha.pet_shop.domain.Cat;
import org.springframework.stereotype.Component;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import java.util.ArrayList;
import java.util.List;


@Component
@Path("/cats")
public class CatResource {

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Cat> getAllCats() {
        List<Cat> catList = new ArrayList<Cat>();
        Cat murzik = new Cat();
        murzik.setId(1);
        murzik.setBreed("maincun");
        murzik.setColor("grey");
        murzik.setName("murzik");
        murzik.setTeilLength(1.2);
        catList.add(murzik);
        return catList;
    }

    @GET
    @Path("{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Cat getCat(@PathParam(value = "id") String id) {
        Cat murzik = new Cat();
        murzik.setId(1);
        murzik.setBreed("maincun");
        murzik.setColor("grey");
        murzik.setName("murzik");
        murzik.setTeilLength(1.2);
    return murzik;
    }

    /*@GET
    @Path("/employee")
    @Produces(MediaType.APPLICATION_JSON)
    public Employee getEmployee(@QueryParam("id") String id,@QueryParam("name") String name) {
        Employee e1 = new Employee();
        e1.initializeDummy();
        e1.setCec(id);
        e1.setFirstName(name);
        return e1;
    }

    @POST
    @Path("/search")
    @Consumes("application/x-www-form-urlencoded")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Employee> employeeSearch(MultivaluedMap<String, String> form) {
        Employee e1 = new Employee();
        e1.setId(Integer.parseInt(form.getFirst("id")));
        e1.setFirstName(form.getFirst("name"));
        List<Employee> elist = employeeService.getEmployee(e1);
        return elist;
    }

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Employee addEmployee(Employee e) {
        int id = employeeService.addEmplyee(e);
        e.setId(id);
        return e;
    }*/

}