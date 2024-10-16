package org.example.backend.api.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
public class Stints {
    @Getter
    @Setter
    private String compound;

    @Override
    public String toString() {
        return "Stints{" +
                "compound='" + compound + '\'' +
                '}';
    }
}
