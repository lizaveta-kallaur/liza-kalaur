'use strict';


class BinaryTree {
	constructor() {
		this.root = null;
	}

	insert(data) {
		var b = true;
		var newnode = new Node(data, null, null);
		if (this.root === null) {
			this.root = newnode;
		}
		else {
			var  ps = this.root;
			var pr;
			while (ps!=null) {
				pr = ps;
				b = (data < ps.data);
				if (b) ps = ps.left;
				else ps = ps.right;
			}
			if (b) { 
				pr.left = newnode;
			}
			else {
				pr.right = newnode;
			}
		}
	}

	contains(data) {
		if (this.root === null) {
			return false;
		}
		var  ps = this.root;
		while (ps!=null) {
			if (ps.data === data) {
				return true;
			}
			if (data < ps.data) {
				ps = ps.left;
			}
			else {
				ps = ps.right;
			}
		}	
		return false;
	}

	remove(data) {
		var  ps = this.root;
		var pr = ps;
		if (this.contains(data)) {
			while ((ps != null) && (ps.data != data)) {
				pr = ps;
				if (data < ps.data) {
					ps = ps.left;
				}
				else {
					ps = ps.right;
				}
			} 
			if ((ps.left === null) && (ps.right === null)) {
				if (ps === pr) {
					this.root = null;
				}
				if (pr.left === ps) {
					pr.left = null;
				}
				else {
					pr.right = null;
				}
			}
			else if (ps.left === null) {
				if (ps === pr) {
					ps = ps.right;
				}
				if (pr.left === ps) {
					pr.left = ps.right;
				}
				else {
					pr.right = ps.right;
				}
			}
			else if (ps.right === null) {
				if (ps === pr) {
					ps = ps.left;
				}
				if (pr.left === ps) {
					pr.left = ps.left;
				}
				else {
					pr.right = ps.left;
				}
			}
			else { 
				var w = ps.right;
				var v;
				if (w.left === null) {
					w.left = ps.left;
				}
				else {
					while (w.left != NULL) {
						v = w;
						w = w.left;
					}
					v.left = w.right;
					w.right = ps.right;
					w.left = ps.left;
				}
				if (pr.left === ps) {
					pr.left = w;
				}
				else {
					pr.right = w;
				}
			}
		}
	}
	
	size() {
		var node = this.root;
		
		function size(node) {
			if (node === null) {
				return 0;
			}
			return size(node.left) + size(node.right) + 1;
		}
		return size(node);
	}

	isEmpty() {
		if (this.root === null) {
			return true;
		}
		else {
			return false;
		}
	}
		
}
