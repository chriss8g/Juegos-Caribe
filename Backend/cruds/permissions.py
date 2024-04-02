from rest_framework.permissions import BasePermission, SAFE_METHODS
MODIFY_METHODS = ('PUT', 'PATCH')

class ReadOnly(BasePermission):
    def has_permission(self, request, view):
        return True
        #return request.method in SAFE_METHODS
    
class  IsOwnerOrReadOnly(BasePermission):
    """
    Custom permission to only allow owners of an object to edit it.
    Assumes the model instance has a `user` attribute.
    """
    def has_permission(self, request, view):
        if request.method in SAFE_METHODS:
            return True
    
    def has_object_permission(self, request, view, obj):
        # Read permissions are allowed for any user (GET, HEAD or OPTIONS request)
        if request.method in SAFE_METHODS:
            return True
        
        if request.method in MODIFY_METHODS:
        # Update permissions are only allowed for the owner of the snippet
            return obj.user == request.user