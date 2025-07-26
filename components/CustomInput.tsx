import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/Form";
import { InputHTMLAttributes } from "react";
import { Input } from "./ui/Input";
import { Control, FieldPath } from "react-hook-form";
import { z } from "zod";
import { authFormSchema } from "@/lib/utils";

const formSchema = authFormSchema("sign-up");

interface ICustomInputProps {
  control: Control<z.infer<typeof formSchema>>;
  name: FieldPath<z.infer<typeof formSchema>>;
  label: string;
  type?: InputHTMLAttributes<HTMLInputElement>["type"];
  placeholder?: InputHTMLAttributes<HTMLInputElement>["placeholder"];
}

const CustomInput = ({ control, name, label, type = "text", placeholder }: ICustomInputProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="form-item flex-1">
          <FormLabel className="form-label">{label}</FormLabel>
          <div className="flex w-full flex-col">
            <FormControl>
              <Input type={type} placeholder={placeholder} className="input-class" {...field} />
            </FormControl>
            <FormMessage className="form-message mt-2" />
          </div>
        </FormItem>
      )}
    />
  );
};

export default CustomInput;
