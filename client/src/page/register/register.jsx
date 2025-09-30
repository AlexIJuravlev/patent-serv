import styled from 'styled-components';
import * as yup from 'yup';
import { Input, Button } from '../../components';
import { Link, Navigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserRole } from '../../selectors';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useResetForm } from '../../hooks';
import { setUser } from '../../action';
import { ROLE } from '../../constant';
import { MessageError } from '../../components';
import { request } from '../../utils/request';

const authFormScheme = yup.object().shape({
	login: yup
		.string()
		.required('Заполните логин')
		.matches(/^\w+$/, 'Неверно заполнен логин. Допоскаются только цифры и буквы')
		.min(3, 'Неверено заполнен логин. Минимум 3 символа')
		.max(15, 'Неверено заполнен логин. Максимум 15 символа'),
	password: yup
		.string()
		.required('Заполните пароль')
		.matches(
			/^[\w#%!]+$/,
			'Неверно заполнен пароль. Допоскаются только цифры, буквы и знаки # % !',
		)
		.min(3, 'Неверено заполнен пароль. Минимум 3 символа')
		.max(15, 'Неверено заполнен пароль. Максимум 15 символа'),
	passcheck: yup
		.string()
		.required('Заполните повтор пароля')
		.oneOf([yup.ref('password'), null], 'Пароль не совпадает')
});

const BlogAuth = styled.div`
	border: 1px solid black;
	border-radius: 30px;
	padding: 30px;
	background-color: #563de4;
	display: flex;
	margin: 0 auto;
`;

const StyledLink = styled(Link)`
	text-align: center;
	text-decoration: underline;
	color: white;
	margin: 0 0 20px;
	font-size: 18px;
`;

const RegisterContainer = ({ className }) => {
	const dispatch = useDispatch();

	const roleId = useSelector(selectUserRole);



	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			login: '',
			password: '',
		},
		resolver: yupResolver(authFormScheme),
	});

	const [serverError, setServerError] = useState(null);

	useResetForm(reset);

	const onSubmit = ({ login, password }) => {
		request('/api/register','POST',{login, password}).then(({ error, user }) => {
			if (error) {
				setServerError(`Ошибка запроса ${error}`);
				return;
			}

			dispatch(setUser(user));
			sessionStorage.setItem('userData', JSON.stringify(user));
		});
	};

	const formError = errors?.login?.message || errors?.password?.message || errors?.passcheck?.message;
	const errorMessage = formError || serverError;

	if (roleId !== ROLE.GUEST) {
		return <Navigate to='/' />;
	}

	return (
		<div className={className}>
			<BlogAuth>
				<form onSubmit={handleSubmit(onSubmit)}>
					<h2>Регистрация</h2>
					<Input
						type='text'
						placeholder='Логин...'
						width='80%'
						{...register('login', { onChange: () => setServerError(null) })}
					/>
					<Input
						type='password'
						placeholder='Пароль...'
						width='80%'
						{...register('password', {
							onChange: () => setServerError(null),
						})}
					/>
					<Input
						type='password'
						placeholder='Повторите пароль...'
						width='80%'
						{...register('passcheck', {
							onChange: () => setServerError(null),
						})}
					/>
					{errorMessage && <MessageError>{errorMessage}</MessageError>}
					<br />
					<StyledLink to='/login'>Есть логин?</StyledLink>
					<Button width='50%' type='submit' size='14px' disabled={!!formError}>
						Зарегестрироваться
					</Button>
				</form>
			</BlogAuth>
		</div>
	);
};

export const Register = styled(RegisterContainer)`
	display: flex;
	justify-content: center;
	flex-direction: column;
	margin: 0 auto;
	height: 100vh;
	color: white;

	form {
		width: 300px;
		display: flex;
		align-items: center;
		flex-direction: column;
	}
`;
