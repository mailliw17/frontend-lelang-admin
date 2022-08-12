import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AkunPenjualEditComponent } from './components/akun-penjual-edit/akun-penjual-edit.component';
import { AkunPenjualHomeComponent } from './components/akun-penjual-home/akun-penjual-home.component';
import { AkunPenjualTambahComponent } from './components/akun-penjual-tambah/akun-penjual-tambah.component';
import { CabangPenjualEditComponent } from './components/cabang-penjual-edit/cabang-penjual-edit.component';
import { CabangPenjualHomeComponent } from './components/cabang-penjual-home/cabang-penjual-home.component';
import { CabangPenjualTambahComponent } from './components/cabang-penjual-tambah/cabang-penjual-tambah.component';
import { FaqEditComponent } from './components/faq-edit/faq-edit.component';
import { FaqHomeComponent } from './components/faq-home/faq-home.component';
import { FaqTambahComponent } from './components/faq-tambah/faq-tambah.component';
import { GantiPasswordComponent } from './components/ganti-password/ganti-password.component';
import { LoginComponent } from './components/login/login.component';
import { LotLelangDetailComponent } from './components/lot-lelang-detail/lot-lelang-detail.component';
import { LotLelangEditComponent } from './components/lot-lelang-edit/lot-lelang-edit.component';
import { LotLelangHomeComponent } from './components/lot-lelang-home/lot-lelang-home.component';
import { LotLelangTambahComponent } from './components/lot-lelang-tambah/lot-lelang-tambah.component';
import { OperatorEditComponent } from './components/operator-edit/operator-edit.component';
import { OperatorHomeComponent } from './components/operator-home/operator-home.component';
import { OperatorTambahComponent } from './components/operator-tambah/operator-tambah.component';
import { PenjualEditComponent } from './components/penjual-edit/penjual-edit.component';
import { PenjualHomeComponent } from './components/penjual-home/penjual-home.component';
import { PenjualTambahComponent } from './components/penjual-tambah/penjual-tambah.component';
import { PenyelenggaraEditComponent } from './components/penyelenggara-edit/penyelenggara-edit.component';
import { PenyelenggaraHomeComponent } from './components/penyelenggara-home/penyelenggara-home.component';
import { PenyelenggaraTambahComponent } from './components/penyelenggara-tambah/penyelenggara-tambah.component';
import { ValidasiBerkasCekComponent } from './components/validasi-berkas-cek/validasi-berkas-cek.component';
import { ValidasiBerkasHomeComponent } from './components/validasi-berkas-home/validasi-berkas-home.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'lot-lelang', component: LotLelangHomeComponent },
  { path: 'lot-lelang/detail/:id', component: LotLelangDetailComponent },
  { path: 'lot-lelang/edit/:id', component: LotLelangEditComponent },
  { path: 'lot-lelang/tambah', component: LotLelangTambahComponent },
  { path: 'faq', component: FaqHomeComponent },
  { path: 'faq/tambah', component: FaqTambahComponent },
  { path: 'faq/edit/:id', component: FaqEditComponent },
  { path: 'akun-operator', component: OperatorHomeComponent },
  { path: 'akun-operator/tambah', component: OperatorTambahComponent },
  { path: 'akun-operator/edit/:id', component: OperatorEditComponent },
  { path: 'validasi-berkas', component: ValidasiBerkasHomeComponent },
  { path: 'validasi-berkas/cek/:id', component: ValidasiBerkasCekComponent },
  { path: 'penjual', component: PenjualHomeComponent },
  { path: 'penjual/tambah', component: PenjualTambahComponent },
  { path: 'penjual/edit/:id', component: PenjualEditComponent },
  { path: 'cabang-penjual', component: CabangPenjualHomeComponent },
  { path: 'cabang-penjual/tambah', component: CabangPenjualTambahComponent },
  { path: 'cabang-penjual/edit/:id', component: CabangPenjualEditComponent },
  { path: 'penyelenggara', component: PenyelenggaraHomeComponent },
  { path: 'penyelenggara/tambah', component: PenyelenggaraTambahComponent },
  { path: 'penyelenggara/edit/:id', component: PenyelenggaraEditComponent },
  { path: 'ganti-password', component: GantiPasswordComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
