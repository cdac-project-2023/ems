package com.sunbeam.exception;

public class ResourceNotFoundException extends RuntimeException {

		/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

		public ResourceNotFoundException(String mesg) {
			super(mesg);
		}
}
