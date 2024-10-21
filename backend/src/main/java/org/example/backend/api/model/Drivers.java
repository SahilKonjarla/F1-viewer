package org.example.backend.api.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
public class Drivers {
    @Getter
    @Setter
    String name_acronym;

    @Override
    public String toString() {
        return "Drivers{" +
                "name_acronym='" + name_acronym + '\'' +
                '}';
    }


}
