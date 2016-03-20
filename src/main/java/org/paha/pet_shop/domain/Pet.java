package org.paha.pet_shop.domain;

public class Pet {

    private int id;

    private String breed;

    private String name;

    private String color;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getBreed() {
        return breed;
    }

    public void setBreed(String breed) {
        this.breed = breed;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Pet pet = (Pet) o;

        if (id != pet.id) return false;
        if (breed != null ? !breed.equals(pet.breed) : pet.breed != null) return false;
        if (name != null ? !name.equals(pet.name) : pet.name != null) return false;
        return color != null ? color.equals(pet.color) : pet.color == null;

    }

    @Override
    public int hashCode() {
        int result = id;
        result = 31 * result + (breed != null ? breed.hashCode() : 0);
        result = 31 * result + (name != null ? name.hashCode() : 0);
        result = 31 * result + (color != null ? color.hashCode() : 0);
        return result;
    }
}
