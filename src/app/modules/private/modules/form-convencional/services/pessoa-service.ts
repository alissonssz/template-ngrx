
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class PessoaService {
    constructor(private http: HttpClient) {
        
    }

    getPessoa(id: number) {
        return this.http.get(`${environment.URL_API}/pessoa/${id}`);
    }

    getPessoas() {
        return this.http.get(`${environment.URL_API}/pessoa`);
    }

}