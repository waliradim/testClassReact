
import Clock from './Clock'

export default function ClockList({ara = []}) {
    return (
        <div>
            {
                ara.map((key) => ( 
                <Clock key={key} />
                
                )
            )
        
            }
        
        </div>
    )
}
