import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Textarea } from "../ui/textarea";


const commonForm = ({ formControl, formData, setFormData, onSubmit, buttonText }) => {
    const commonForm = (getControlItem) => {
        let element = null;
        const value = formData[getControlItem.name] || ''

        switch (getControlItem.componentType) {
            case 'input':
                element =
                    <Input
                        name={getControlItem.name}
                        placeholder={getControlItem.placeholder}
                        id={getControlItem.name}
                        type={getControlItem.type}
                        value={value}
                        onChange = { event => setFormData({
                            ...formData,
                            [getControlItem.name]: event.target.value

                        })}
                    ></Input>

                break;
            case 'select':
                element =
                    <Select onValueChange={(value)=>setFormData({  
                        ...formData,
                        [getControlItem.name] : value
                    })} value={value}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder={getControlItem.placeholder}></SelectValue>
                        </SelectTrigger>
                        <SelectContent>
                            {
                                getControlItem.options &&
                                    getControlItem.options.length > 0 ?
                                    getControlItem.options.map(optionItems => <SelectItem key={optionItems.id} value={optionItems.id} >{optionItems.lable}</SelectItem>) : null

                            }
                        </SelectContent>
                    </Select>
                break;
            case 'textarea':
                element =
                    <Textarea
                        name={getControlItem.name}
                        placeholder={getControlItem.placeholder}
                        id={getControlItem.id}
                        value={value}
                    ></Textarea>
                break;

            default:
                element =
                    <Input
                        name={getControlItem.name}
                        placeholder={getControlItem.placeholder}
                        id={getControlItem.name}
                        type={getControlItem.type}
                        value={value}
                        onChange = { event => setFormData({
                            ...formData,
                            [getControlItem.name]: event.target.value

                        })}
                    ></Input>

                break;
        }
        return element;

    }
    return (
        <form onSubmit={onSubmit}>
            <div className="flex flex-col gap-3">
                {
                    formControl.map(controlItem =>
                        <div className="grid w-full gap-1.5" key={controlItem.name}>
                            <Label className="mg-1">{controlItem.label}</Label>
                            {commonForm}
                        </div>)
                }

            </div>
            <Button type='submit' className='mt-2 w-full'>{buttonText || 'Submit' }</Button>
        </form>
    );
};

export default commonForm;