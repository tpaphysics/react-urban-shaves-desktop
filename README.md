<img src="https://img.shields.io/badge/Yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white" alt="Yarn" />
  
<img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" alt="vite"/>
  
<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"  alt="React" />
  
<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="Typescript" />
<img src="https://img.shields.io/badge/Chakra--UI-319795?style=for-the-badge&logo=chakra-ui&logoColor=white" alt="Chakra-ui" />
<img src="" alt="" />
<img src="" alt="" />
  
##  **💻 Projeto**
  
  
O projeto <strong>Urban Shaves</strong> foi desenvolvido em [React](https://reactjs.org/ ) utilizando o [Chakra UI](https://chakra-ui.com/guides/first-steps ).
  
##  **🔖 Layout**
  
  
<p>Foi criado o nome e a logo <strong>Urban Shaves</strong>, utilizamos a seguinte tabela de cores:
</p>
<img alt="paleta" src="./src/assets/pallet.png" width="300px">
  
<br/>
  
Foi necessário o o uso do [GIMP](https://www.gimp.org/ ) para tratar as imagens e aplicar alguns filtros com base na paleta de cores. Criamos próprio calendário pois foi mais fácil criar outro ao invés de adaptar algum outro ao projeto.
  
####  **Web**
  
  
  <div>
    <img alt="login" src="./src/assets/desktop/login.png" width="100%">
    <br/>
    <br/>
    <img alt="register" src="./src/assets/desktop/register.png" width="100%">
    <br/>
    <br/>
    <img alt="forgot" src="./src/assets/desktop/forgot.png" width="100%">
    <br/>
    <br/>
    <img alt="profile" src="./src/assets/desktop/profile.png" width="100%">
  <div>
  
####  **Mobile**
  
  
  <img alt="login" src="./src/assets/mobile/login.png" widht="320px">
  <img alt="register" src="./src/assets/mobile/register.png" widht="320px">
  <img alt="forgot" src="./src/assets/mobile/forgot.png" widht="320px">
  <img alt="profile" src="./src/assets/mobile/profile.png" widht="320px">
  
##  Get Started
  
  
```bash
# Instalação das dependências
$ yarn
  
# Start
$ yarn dev
```
  
##  Observação
  
  
Somente as rotas /login e de criação de usuário /users são públicas. Para tornar todas as rotas públicas basta colocar o decorator <strong>@IsPublicRoute()</strong> no UsersController como no exemplo abaixo:
  
```typescript
@IsPublicRoute() #aqui
  
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  ... ... ... ...
  ... ... ... ...
```
  
Agora você deve criar pelo menos um usuário no banco de dados. Você pode usar algum cliente http como curl, postman, insomnia, swagger ou usar o prisma studio.
  
Usando o curl:
  
```bash
curl -X 'POST' \
  'http://localhost:3000/users' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "email": "user@gmail.com",
  "name": "UserName1",
  "password": "Password1",
  "age": 28,
  "gender": "masculine"
}'
```
  
Usando o prisma studio:
  
```bash
$ yarm prisma studio
```
  
##  Login
  
  
Usando o curl:
  
```bash
curl -X 'POST' \
  'http://localhost:3000/login' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "email": "user@gmail.com",
  "password": "Password1",
}'
```
  
Usando o swagger:
  
```url
http://localhost:3000/api/login
```
  
<image width="360px" src="./.readme/login-swagger.png"/>
  
Após efetuar login copie o access_token gerado:
  
```json
{
  "user": {
    "id": "0a177967-4161-4ad8-8c6d-02b8b22deaee",
    "email": "Carlos_Fadel@gmail.com",
    "name": "Harvey.Upton",
    "age": 50,
    "gender": "masculine",
    "avatarFileName": "http://gentle-consul.com",
    "createdAt": 1651823528429,
    "updateAt": 1651823528429
  },
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI4ZmNiZTI4NS03Y2QzLTQxZjItOGQ4YS1kNWFhMDA3MWE3MDQiLCJlbWFpbCI6InRlc3RlQHRlc3RlLmNvbSIsIm5hbWUiOiJ0ZXN0ZSIsImlhdCI6MTY1MTAwOTYzMywiZXhwIjoxNjUzNjAxNjMzfQ.9D_7gjQ96aRYYahZVZQqQLgEpD699YOkhKozy6EYgsA"
}
```
  
Cole no campo Authorize:
  
<image width="360px" src="./.readme/authorize.example.png"/>
  
##  Upload de imagens com o multer
  
  
No médodo <strong>update</strong> conseguimos fazer uploads de imagens para pasta <strong>upload</strong> no diretório corrente do projeto. O multer foi configurado no arquivo <strong>multer-config.ts</strong>. Para entender a integração do multer com NestJs basta ler a [documentação](https://docs.nestjs.com/techniques/file-upload ). Abaixo configuramos o multer para filtar arquivos de imagens com extensões jpeg, jpg e png com tamanho máximo defindo no arquivo .env na variável AVATAR_SIZE_FILE.
  
```typescript
// multer-config.js
  
import { Injectable, UnsupportedMediaTypeException } from "@nestjs/common";
import { randomBytes } from "crypto";
  
import {
  MulterModuleOptions,
  MulterOptionsFactory,
} from "@nestjs/platform-express";
import { diskStorage } from "multer";
  
@Injectable()
export default class MulterConfigService implements MulterOptionsFactory {
  createMulterOptions(): MulterModuleOptions {
    return {
      storage: diskStorage({
        destination: "./upload",
        filename: (_req, file, cb) => {
          const { mimetype } = file;
          const [, extension] = mimetype.split("/", 2);
          const fileHashName = randomBytes(16).toString("hex");
          const name = `${fileHashName}.${extension}`;
          return cb(null, name);
        },
      }),
      limits: { fileSize: Number(process.env.AVATAR_SIZE_FILE) * 1024 * 1024 },
      fileFilter: (
        _req: any,
        file: Express.Multer.File,
        cb: (error: Error | null, acceptFile: boolean) => void
      ) => {
        if (["image/png", "image/jpg", "image/jpeg"].includes(file.mimetype)) {
          cb(null, true);
        } else {
          cb(
            new UnsupportedMediaTypeException(
              "Only use jpg jpeg or png files!"
            ),
            false
          );
        }
      },
    };
  }
}
```
  
##  Paginação usando o Prisma
  
  
Implementamos um sistema de paginação do tipo offset utilizando o Prisma no arquivo <strong>user.service.ts</strong>
  
```typescript
// user.service.ts
  
async findAll(query: findAllUserDto): Promise<FindAllUserResponse> {
    const { page, take } = query;
  
    const totalUsers = await this.prisma.user.count();
  
    if (!totalUsers || totalUsers == 0) {
      throw new InternalServerErrorException('Not found users!');
    }
  
    if (take > totalUsers) {
      throw new BadRequestException('Invalid number of users!');
    }
  
    const totalPages = Math.ceil(totalUsers / take);
  
    if (page > totalPages) {
      throw new BadRequestException(
        `Maximum number of pages are ${totalPages}!`,
      );
    }
  
    const users = await this.prisma.user.findMany({
      skip: (page - 1) * take,
      take,
      orderBy: {
        createdAt: 'asc',
      },
      select: {
        id: true,
        name: true,
        email: true,
        age: true,
        gender: true,
        avatarFileName: true,
        password: false,
        createdAt: true,
        updateAt: true,
      },
    });
  
    return {
      paginate: {
        page: page,
        totalPages,
      },
      users: [...users],
    };
  }
```
  
<p>
<strong>skip</strong>: Número de resultados a serem ignordos
</p>
<p>
<strong>take</strong>: Número de resultados retornados após o skip
</p>
  
De maneira intuitiva, temos:
  
```
page > 0
skip=(page-1)take
```
  
E eles são validados no findAll-user.dto.ts como sendo do tipo númerico, inteiro e maior que 0
  
```typescript
import { Type } from 'class-transformer';
import { IsInt, Min } from 'class-validator';
import { User } from '../entities/user.entity';
  
export class findAllUserDto extends User {
  @Type(() => Number)
  @IsInt()
  @Min(1)
  page: number;
  
  @Type(() => Number)
  @IsInt()
  @Min(1)
  take: number;
```
  
##  **💥 Considerações**
  
  
Existem muita vatagens na utilização do NestJs para criação de APIs uma delas é o fato dele respeitar os principios do <strong>SOLID</strong>. Desta forma forma fica mais facil a escalabilidade do projeto e o trabalho em grupo com uma aquitetura padrão definida. O NestJs usa uma aquitetura muito semelhante a do framework [Angular](https://angular.io/ ), com uso de decorators. Particularmente achei bem interessante a abordagem da biblioteca [class-validator](https://www.npmjs.com/package/class-validator ) para validação de campos através de decorators nos Data Transfer Objects (DTOs) :
  
```typescript
import { User } from "../entities/user.entity";
import {
  IsEmail,
  IsIn,
  IsInt,
  IsString,
  Matches,
  Max,
  MaxLength,
  Min,
  MinLength,
} from "class-validator";
  
export class CreateUserDto extends User {
  @IsString()
  @IsEmail()
  email: string;
  
  @IsString()
  @Matches(/[a-zA-Z0-9_-]{2,20}/)
  name: string;
  
  @MinLength(6)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: "Password too weak!",
  })
  password: string;
  
  @IsInt()
  @Min(1)
  @Max(120)
  age: number;
  
  @IsString()
  @IsIn(["masculine", "feminine"])
  gender: string;
}
```
  
Outro fator interressante é o tratamento de erros de forma global através da utilização de middlewares. Existem inumeras outras vantagens na utilização NestJs. Para mais informações, consulte a [documentação](https://nestjs.com/ ).
  
##  **👨‍🚀 Autor**
  
  
<a href="https://github.com/tpaphysics">
<img alt="Thiago Pacheco" src="https://images.weserv.nl/?url=avatars.githubusercontent.com/u/46402647?v=4?v=4&h=300&w=300&fit=cover&mask=circle&maxage=7d" width="100px"/>
  <br />
  <sub>
    <b>Thiago Pacheco de Andrade</b>
  </sub>
</a>
<br />
  
👋 Meus contatos!
  
[![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-blue?style=for-the-badge&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/thiago-pacheco-200a1a86/ )](https://www.linkedin.com/in/thiago-pacheco-200a1a86/)
[![Gmail Badge](https://img.shields.io/badge/-Gmail-c14438?style=for-the-badge&logo=Gmail&logoColor=white&link=mailto:physics.posgrad.@gmail.com )](mailto:physics.posgrad.@gmail.com)
  
##   Licença
  
  
  
Veja o arquivo [MIT license](LICENSE ).
  