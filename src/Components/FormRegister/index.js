import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import * as yup from 'yup'

import { DataUser } from '../../Hooks/UserContext'
import { Button } from '../Button'
import { ContainerForm, ContainerButton, Input, TextError } from './style'

export const Form = () => {
  const { putUserData } = DataUser()

  const navigate = useNavigate()

  const schema = yup.object().shape({
    name: yup.string().required('Name is required'),
    date: yup.string().required('Date of Birth is required'),
    cpf: yup
      .string()
      .required('CPF is required')
      .min(11, '13 digits are required to validate the cpf')
      .max(11, '13 digits are required to validate the cpf'),
    email: yup
      .string()
      .email('Enter a valid email address')
      .required('Email is Required'),
    password: yup
      .string()
      .required('Password is Required')
      .min(6, 'Password must be at least 6 digits long'),
    confirmPassword: yup
      .string()
      .required('Password is Required')
      .oneOf([yup.ref('password')], 'Passwords must be the same'),
    cep: yup
      .string()
      .required('Cep is Required')
      .min(8, '8 digits are required to validate the zip code')
      .max(8),
    street: yup.string().required('Street name is required'),
    addressNumber: yup.string().required('Number is Required'),
    district: yup.string().required('Neighborhood name is Required'),
    comprement: yup.string(),
    city: yup.string().required('City name is Required'),
    uf: yup.string().required('Uf is Required')
  })

  const onSubmit = async dataClient => {
    await localStorage.setItem('user:dataUser', JSON.stringify(dataClient))

    const clientInfo = await localStorage.getItem('user:dataUser')

    if (clientInfo) {
      putUserData(JSON.parse(clientInfo))
    }
  }

  const goBackPage = () => {
    navigate('/')
  }

  const checkCep = dataCep => {
    const cep = dataCep.target.value.replace(/\D/g, '')

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then(res => res.json())
      .then(data => {
        setValue('street', data.logradouro)
        setValue('district', data.bairro)
        setValue('city', data.localidade)
        setValue('uf', data.uf)
        setFocus('addressNumber')
      })
  }

  const {
    register,
    handleSubmit,
    setValue,
    setFocus,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)}>
      <ContainerForm>
        <Input
          className="name"
          placeholder="Nome"
          type="text"
          {...register('name')}
          error={errors.name?.message}
        />
        <TextError className="name">{errors.name?.message}</TextError>

        <Input
          className="date"
          type="date"
          {...register('date')}
          error={errors.date?.message}
        />
        <TextError className="date">{errors.date?.message}</TextError>

        <Input
          className="cpf"
          placeholder="CPF"
          {...register('cpf')}
          error={errors.cpf?.message}
        />
        <TextError className="cpf">{errors.cpf?.message}</TextError>

        <Input
          className="email"
          placeholder="E-mail"
          type="email"
          {...register('email')}
          error={errors.email?.message}
        />
        <TextError className="email">{errors.email?.message}</TextError>

        <Input
          className="password"
          placeholder="Senha"
          type="password"
          {...register('password')}
          error={errors.password?.message}
        />
        <TextError className="password">{errors.password?.message}</TextError>

        <Input
          className="confirmPassword"
          placeholder="Confirmar Senha"
          type="password"
          {...register('confirmPassword')}
          error={errors.confirmPassword?.message}
        />
        <TextError className="confirmPassword">
          {errors.confirmPassword?.message}
        </TextError>

        <Input // start address
          className="cep"
          placeholder="Cep"
          type="text"
          {...register('cep')}
          onBlur={checkCep}
          error={errors.cep?.message}
        />
        <TextError className="cep">{errors.cep?.message}</TextError>

        <Input
          className="street"
          placeholder="Rua"
          type="text"
          {...register('street')}
          error={errors.street?.message}
        />
        <TextError className="street">{errors.street?.message}</TextError>

        <Input
          className="addressNumber"
          placeholder="Nº"
          type="number"
          {...register('addressNumber')}
          error={errors.addressNumber?.message}
        />
        <TextError className="addressNumber">
          {errors.addressNumber?.message}
        </TextError>

        <Input
          className="district"
          placeholder="Bairro"
          type="text"
          {...register('district')}
          error={errors.district?.message}
        />
        <TextError className="district">{errors.district?.message}</TextError>

        <Input
          className="city"
          placeholder="Cidade"
          type="text"
          {...register('city')}
          error={errors.city?.message}
        />
        <TextError className="city">{errors.city?.message}</TextError>

        <Input
          className="uf"
          placeholder="UF"
          type="text"
          {...register('uf')}
          error={errors.uf?.message}
        />
        <TextError className="uf">{errors.uf?.message}</TextError>
      </ContainerForm>
      <ContainerButton>
        <Button onClick={goBackPage}>Voltar</Button>
        <Button type="submit">Cadastrar</Button>
      </ContainerButton>
    </form>
  )
}
