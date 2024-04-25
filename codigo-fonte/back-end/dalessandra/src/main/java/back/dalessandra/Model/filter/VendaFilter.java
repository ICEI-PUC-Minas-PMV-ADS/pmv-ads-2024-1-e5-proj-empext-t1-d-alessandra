package back.dalessandra.Model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class VendaFilter {

    private LocalDateTime dataInicio;
    private LocalDateTime dataFim;
}
