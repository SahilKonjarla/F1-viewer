package org.example.backend.api.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
public class Position {
    @Getter
    @Setter
    private int position;

    @Override
    public String toString() {
        return "Position{" +
                "position=" + position +
                '}';
    }
}
