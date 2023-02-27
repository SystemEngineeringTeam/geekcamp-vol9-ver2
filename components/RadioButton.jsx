export default function RadioButton(props){
    return(
        <div className="radio_button area">
            {props.option.map(radio => {
                return (
                    <form>
                        <input type="radio" value={radio.value} name={radio.label} checked={radio.value == props.state} onChange={(e) =>{ 
                            const value = {
                                value: e.currentTarget.value,
                                label: e.currentTarget.name
                            }
                            props.setFunction(value);
                            console.dir("props.state: " + e.currentTarget.name );
                            }
                        }/>
                        <label>
                            {radio.label}
                        </label>
                    </form>
                )
            })}
        </div>
    )
}