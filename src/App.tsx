import { Envelope, Lock } from "phosphor-react"
import { Button } from "./components/Button"
import { Checkbox } from "./components/Checkbox"
import { Heading } from "./components/Heading"
import { Text } from "./components/Text"
import { TextInput } from "./components/TextInput"
import { Logo } from "./Logo"
import './styles/global.css'

export function App() {

  return (   
    <div className="w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100">
      
      <header className="flex flex-col items-center">
         <Logo/>

         <Heading size="lg" className=" mt-4">
           Ignite Lab
         </Heading>

         <Text size="lg" className="text-gray-400 mt-1">
           Faça login e começe a usar !
         </Text>
      </header>


      <form className="flex flex-col gap-4 items-stretch mt-10 w-full max-w-[400px]">
        <label htmlFor="email" className="flex flex-col gap-3">
          <Text>Endereço de email</Text>
            <TextInput.Root>
               <TextInput.Icon>
                  <Envelope  size={24}/>
               </TextInput.Icon>
            <TextInput.Input id="email" type="email" placeholder="Digite seu endereço de e-mail" />
          </TextInput.Root>             
        </label>

        <label htmlFor="password" className="flex flex-col gap-3 mt-3">
          <Text>Senha</Text>
            <TextInput.Root>
               <TextInput.Icon>
                  <Lock size={24}/>
               </TextInput.Icon>
            <TextInput.Input id="password" type="password" placeholder="*******" />
          </TextInput.Root>
        </label>  

        <label className="flex items-center gap-2">
          <Checkbox />
          <Text size="sm" className="text-gray-100">
            Lembrar de mim por 30 dias
          </Text>
        </label>

        <Button type="submit" className="mt-4">Entrar na plataforma</Button>
      </form>

      <footer className="flex flex-col items-center gap-4 mt-8">
       
          <a href="#" className="text-gray-400 underline hover:text-gray-100 text-[14px]">Esqueceu sua senha?</a>   
      
          <a href="#" className="text-gray-400 underline hover:text-gray-100 text-[14px]">Criar uma conta</a>
      
      </footer>
    </div>

  )
}


