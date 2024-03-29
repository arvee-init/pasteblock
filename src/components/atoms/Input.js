import styled from 'styled-components'
import { useRef } from 'react'

const Input = styled.div`

	display: flex;
	flex-grow: 1;
	flex-direction: column;
	margin: 0;
	
	& select, input, & p {
		background: transparent;
		border: none;
	}

	& select, input, & p {
		padding: .5rem;
		width: 100%;
		font-weight: 600;
		::placeholder {
			${ ( { theme } ) => theme.colors.text };
		}
	}

	& input {
		color: ${ ( { theme } ) => theme.colors.highlight };
	}

	& select {
		color: ${ ( { theme } ) => theme.colors.btn_output_text };
		background: ${ ( { theme } ) => theme.colors.btn_output_bg };
		padding: .25rem;
		margin: 0;
		font-size: .75em;
		font-weight: 400;
		border: 1px solid ${ ( { theme } ) => theme.colors.areaborder };
		border-radius: ${ ( { radius } ) => radius || '2px' };
		-webkit-appearance: none;
		appearance: none;
		::placeholder {
			color: ${ ( { theme } ) => theme.colors.text };
		}
	}

	p {
		color: ${ ( { theme } ) => theme.colors.text };
		font-size: .7rem;
	}

	& label {
		opacity: .5;
		font-style: italic;
		margin-bottom: .5rem;
		display: flex;
		width: ${ ( { width='100%' } ) => width };
		color: ${ ( { theme } ) => theme.colors.text };
		span {
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: .9rem;
			margin-left: auto;
			font-style: normal;
			background: ${ ( { theme } ) => theme.colors.hint };
			color: white;
			border-radius: 50%;
			width: 20px;
			height: 20px;
		}
	}

`

export default ( { onChange, type, label, info, highlight, placeholder, id, title, onClick, options, ...props } ) => {

	const { current: internalId } = useRef( id || `input-${ Math.random() }` )

	return <Input onClick={ onClick } highlight={ highlight }>

		{ label && <label htmlFor={ internalId }>{ label } { info && <span onClick={ f => alert( info ) }>?</span> }</label> }

		{ !title && type != 'dropdown' && <input data-testid={ internalId } placeholder={ placeholder } { ...props } id={ internalId } onChange={ onChange } type={ type || 'text' } /> }
		{ !title && type == 'dropdown' && <select id={ internalId } onChange={ onChange }>
			{ options.map( ( option, index ) => <option key={ index } value={ option.value }>{ option.label }</option> ) }
		</select> }

		{ title && <p>{ title }</p> }
		
	</Input>

}