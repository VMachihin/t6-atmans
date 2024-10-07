import React, { type FC, type ReactNode } from 'react'
import { Link, type LinkProps } from 'react-router-dom'
import styled, { css } from 'styled-components'

type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement>
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

type ButtonComponentProps = {
	as?: 'button' | 'link' | 'route'
	children?: ReactNode
	svgNode?: ReactNode
	$padding?: string
	$height?: string
	$radius?: string
	$variant?: 'primary' | 'secondary'
}

type SharedStylesTypes = {
	$padding?: string
	$height?: string
	$radius?: string
	$variant?: 'primary' | 'secondary'
}

const sharedStyles = css<SharedStylesTypes>`
	padding: ${({ $padding }) => $padding ?? '0 20px'};
	height: ${({ $height }) => $height ?? '40px'};
	border-radius: ${({ $radius }) => $radius ?? '5px'};

	background-color: ${({ $variant }) => {
		if ($variant === 'secondary') return '#E7E7E7'
		return '#00C246'
	}};
	color: ${({ $variant }) => {
		if ($variant === 'secondary') return '#000000'
		return '#ffffff'
	}};
	text-transform: ${({ $variant }) => {
		if ($variant === 'secondary') return 'initial'
		return 'uppercase'
	}};
	border: none;
	text-decoration: none;
	font-weight: 700;
	cursor: pointer;
	display: inline-flex;
	align-items: center;
	transition: all 0.3s;

	&:hover {
		background-color: ${({ $variant }) => {
			if ($variant === 'secondary') return '#E7E7E7'
			return '#00AB3E;'
		}};
		color: ${({ $variant }) => {
			if ($variant === 'secondary') return '#B2B2B2'
			return '#ffffff'
		}};
	}
`

const StyledButton = styled.button<SharedStylesTypes>`
	${sharedStyles}
`
const StyledLink = styled.a<SharedStylesTypes>`
	${sharedStyles}
`
const StyledRouteLink = styled(Link)<SharedStylesTypes>`
	${sharedStyles}
`

export const MainButton: FC<ButtonComponentProps & (ButtonProps | AnchorProps | LinkProps)> = ({
	children,
	as = 'button',
	...props
}) => {
	if (as === 'button') {
		return <StyledButton {...(props as ButtonProps)}>{children}</StyledButton>
	}
	if (as === 'link') {
		return <StyledLink {...(props as AnchorProps)}>{children}</StyledLink>
	}
	if (as === 'route') {
		return <StyledRouteLink {...(props as LinkProps)}>{children}</StyledRouteLink>
	}
	return null
}
